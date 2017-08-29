Vue.component('post', {
  template: "#post-template",
  props: ['post'],
  data: function() {
    return {
      upvoted: false,
      downvoted: false
    };
  },
  methods: {
    upvote: function() {
      this.upvoted = !this.upvoted;
      this.downvoted = false;
    },
    downvote: function() {
      this.downvoted = !this.downvoted;
      this.upvoted = false;
    }
  },
  computed: {
    votes: function() {

      if (this.upvoted) {
        return this.post.votes + 1;
      } else if (this.downvoted) {
        return this.post.votes - 1;
      } else {
        return this.post.votes;
      }

    }
  }
});


var vm = new Vue({
  el: "#app",
  data: {
    comments: [{
      title: "Great article!",
      votes: 2
    }, {
      title: "VueJs commenting system with votes!",
      votes: 5
    }, {
      title: "The random pun that gets a lot of upvotes",
      votes: 85
    }],
    comment: ""
  },
  methods: {
    postComment: function() {
      this.comments.push({
        title: this.comment,
        votes: 0
      })
      this.comment = "";
    }
  }
});
