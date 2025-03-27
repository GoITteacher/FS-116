/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */
//!======================================================

const dog = {
  name: 'Lord',
  breed: 'Spaniel',
  age: 3,

  sayWoof() {
    console.log('Woof woof');
  },

  eat() {
    console.log('Ням ням');
  },

  sleep() {
    console.log('zzzzz');
  },
};

const cat = {
  name: 'Marsik',
  breed: 'basic',
  age: 3,

  sayMeow() {
    console.log('Meow');
  },

  scratch() {
    console.log('||| |||');
  },

  eat() {
    console.log('Ням ням');
  },

  sleep() {
    console.log('zzzzz');
  },
};

//!======================================================

const student1 = {
  firstname: 'Vaysa',
  lastname: 'Pupkin',
  age: 20,
  group: 'FS-116',

  showInfo() {
    console.log(this.firstname);
  },
};

const student2 = {
  firstname: 'Vaysa',
  lastname: 'Pupkin',
  age: 20,
  group: 'FS-116',

  showInfo() {
    console.log(this.firstname);
    console.log(student2.firstname);
  },
};

const student3 = {
  firstname: 'Vaysa',
  lastname: 'Pupkin',
  age: 20,
  group: 'FS-116',

  showInfo() {
    console.log(this.firstname);
    console.log(student3.firstname);
  },
};

const student5 = {
  firstname: 'Kolya',
  lastname: 'Pupkin',

  showFirstname() {
    console.log(this.firstname);
  },
  showLastname() {
    console.log(this.lastname);
  },

  showFullName() {
    this.showFirstname();
    this.showLastname();
  },
};

//!======================================================

const playlist = {
  name: 'My amazing playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  author: 'Volodymyr',
  ganre: 'Pop',

  changeName(newName) {
    this.name = newName;
  },

  addTrack(track) {
    this.tracks.push(track);
  },

  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

// console.log(playlist);

// playlist.changeName('New Pop name');

// console.log(playlist);

//!======================================================

playlist.addTrack('awdawd');
playlist.addTrack('awdawd');
playlist.addTrack('awdawd');
playlist.addTrack('awdawd');

//!======================================================
console.log(playlist.getTrackCount());

playlist.changeName('New playlist name');

playlist.addTrack('new track 1');
console.log(playlist.getTrackCount());

playlist.addTrack('new track 2');
console.log(playlist.getTrackCount());

playlist.updateRating(4);
console.log(playlist);
