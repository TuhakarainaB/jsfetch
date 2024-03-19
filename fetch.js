async function fetchData()
{
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        const content = document.getElementById("content");

        data.forEach(
            post => {
                const postElement = document.createElement('div');
                postElement.classList.add("postElement");

                const titleElement = document.createElement('h2');
                titleElement.textContent = post.title;
                titleElement.classList.add("postTitle");

                const bodyElement = document.createElement('p');
                bodyElement.textContent = post.body;
                bodyElement.classList.add("postBody");

                postElement.appendChild(titleElement);
                postElement.appendChild(bodyElement);

                content.appendChild(postElement);


            }
        );

    }
    catch(error)
    {
        console.error("Error fetching data", error);
    }
}