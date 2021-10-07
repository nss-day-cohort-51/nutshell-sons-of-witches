const remoteURL = "http://localhost:8088"

export const getArticleById = (articleId) => {
  //be sure your a have good data and related to a location and customer
  return fetch(`${remoteURL}/${articleId}`)
  .then(res => res.json())
}

export const getAllArticles= () => {
  return fetch(`${remoteURL}/articles`)
  .then(res => res.json())
}


export const deleteArticle = (id) => {
  return fetch(`${remoteURL}/articles/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addArticle = (newArticle) => {
  return fetch(`${remoteURL}/articles`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticle)
  }).then(response => response.json())
}

export const update = (editedArticle) => {
  return fetch(`${remoteURL}/articles/${editedArticle.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedArticle)
  }).then(data => data.json());
}

// Add this method to the AnimalManager
// export const getRandomId = () => {
//   return fetch(`${remoteURL}/animals`)
//     .then(result => result.json())
//     .then(animals => {
//       const randomIndex = Math.floor(Math.random() * animals.length);
//       const randomAnimal = animals[randomIndex];
//       return randomAnimal.id;
//   });
// }


