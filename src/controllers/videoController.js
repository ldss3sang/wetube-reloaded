let videos = [
  {
    title: "Star Wars IV",
    rating: 10,
    comments: 100,
    createdAt: "2 minutes ago",
    views: 10000,
    id: 1,
  },
  {
    title: "Star Wars V",
    rating: 10,
    comments: 10000,
    createdAt: "2 minutes ago",
    views: 1000000,
    id: 2,
  },
  {
    title: "Star Wars VI",
    rating: 10,
    comments: 100000,
    createdAt: "2 minutes ago",
    views: 2000000,
    id: 3,
  },
];

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];

  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];

  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload");
};

export const postUpload = (req, res) => {
  return res.redirect("/");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
