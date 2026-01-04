export function callApi(reqmethod, url, data, responseHandler) {

    let token = localStorage.getItem("token");  // your JWT token

    let option = {
        method: reqmethod,
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? "Bearer " + token : ""   // add token
        }
    };

    if (reqmethod !== "GET" && reqmethod !== "DELETE") {
        option.body = data;
    }

    fetch(url, option)
        .then(response => {

            // 🔥 Session / Token Expired → Redirect to Login
            if (response.status === 401 || response.status === 403) {
                console.log("JWT expired or unauthorized");

                localStorage.removeItem("token");  // remove old token

                alert("Session expired. Please login again.");
                window.location.href = "/";   // redirect
                return;
            }

            if (!response.ok) {
                throw new Error(response.status + " " + response.statusText);
            }

            return response.text();
        })
        .then(data => {
            if (data !== undefined) {
                responseHandler(data);
            }
        })
        .catch(error => {
            alert(error);
        });
}
