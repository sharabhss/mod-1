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
      title: "I love udacity",
      votes: 2
    }, {
      title: "I think we should take three days off",
      votes: 5
    }, {
      title: "How about the whole week off?",
      votes: 85
    }],
    comment: ""
  },
  methods: {
    postComment: function() {
      if (this.comment != ""){
      this.comments.push({
        title: this.comment,
        votes: 0
      });
    }
      this.comment = "";
      localStorage.vue
    }
  }
});
