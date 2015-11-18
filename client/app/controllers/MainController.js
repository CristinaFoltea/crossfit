(function () {
  angular
      .module('app')
      .controller('MainController', MainController);

  MainController.$inject = ['$scope'];
  function MainController($scope) {
    $scope.articles = [{
        date : 'Tue Nov 17 2015 22:45:53 GMT-0700 (MST)',
        title : 'CrossFit ISABEL',
        imgSrc : 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCVLdXB4xknwRqVJEAkfPQbv-qAIkBZjuprTy8DtftpGKo9nA4',
        info : ['Snatch 135 pound', '30 reps for time'],
        videoScr :'https://www.youtube.com/watch?v=FWqngxzsgsY',
        author : 'cristina'
      },
      {
        date : 'Tue Nov 17 2015 22:45:53 GMT-0700 (MST)',
        title : 'CrossFit Marry',
        imgSrc :'http://cdn.shopify.com/s/files/1/0403/8757/files/crossfit-workouts-for-women_large.jpg?553',
        info : ['5 Handstand push-ups', '10 1-legged squats' ,'15 Pull-ups' ,'As many rounds as possible in 20 min'],
        videoScr :'https://www.youtube.com/watch?v=35HRk1b4CTY',
        author :'cristina'
      },
      {
        date : 'Tue Nov 17 2015 22:45:53 GMT-0700 (MST)',
        title : 'CrossFit JACKIE',
        imgSrc :'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTrXqFhc5rE87HkhwHCG_uw0rxhMcpL3c3-IFQ_zLmOtyHe5PiC',
        info : ['1000 meter row', 'Thruster 45 lbs (50 reps)', 'Pull-ups (30 reps)' ,'For time'],
        videoScr :'https://www.youtube.com/watch?v=n5LbbftRaDs',
        author : 'cristina'
      },
      {
        date :'Tue Nov 17 2015 22:45:53 GMT-0700 (MST)',
        title : 'CrossFit KAREN',
        imgSrc :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwkhcNZUCCC4J5YVn2gU-fap6eefO-f85L_i3DF2ifr9gYldM8w',
        info :['Wall-ball 150 shots' ,'(men 20#-10′ – women 14#-9′)' ,'For time'],
        videoScr :'https://www.youtube.com/watch?v=PMSjEcKFHHs',
        author : 'cristina'
      }
    ]

  }
}())
