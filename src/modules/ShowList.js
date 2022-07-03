class ShowList {
  constructor() {
    this.shows = {};
  }
  addShowList(id, name, image) {
    this.shows[id] = {
      name,
      image,
      comments: [],
    };
  }
  addShowLists(allShows) {
    allShows.forEach((show) => {
      this.addShowList(show.id, show.name, show.image);
    });
  }
}

export default ShowList;
