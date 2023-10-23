const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            classroomsAndress: ['scientifico', 'classico', 'professionale', 'agrario', 'musicale'],
            className: ['text-center', 'section', 'img-student-container', 'img-student'],
            firstStudent: {
                name: 'Carlo',
                lastname: 'Monfrina',
                age: 17,
                favSubject: 'Storia',
                andress: 'Musicale',
                userProfilePic: './img/1588321836_ceb70a3566fd5bbaf64f94021aa18745.jpg',
            },
            secondStudent: {
                name: 'Martina',
                lastname: 'Papotto',
                age: 18,
                favSubject: 'Matematica',
                andress: 'Scientifico',
            },
            thirdStudent: {
                name: 'Camilla',
                lastname: 'Cinghale',
                age: 15,
                favSubject: 'Latino',
                andress: 'Classico',
            },
            fourthStudent: {
                name: 'Marco',
                lastname: 'Randazzo',
                age: 16,
                favSubject: 'Physic',
                andress: 'Professionale',
            },
            fifthStudent: {
                name: 'Laura',
                lastname: 'Papotto',
                age: 18,
                favSubject: 'Agricoltura',
                andress: 'Agrario',
            },
            
        }
    },
    // methods: {
    //     getImage () {
    //       this.userProfilePic = './img/1588321836_ceb70a3566fd5bbaf64f94021aa18745.jpg'
    //     }
    //   }
}).mount('#app');


 