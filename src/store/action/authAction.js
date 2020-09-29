import {projectAuth} from "../../config/fbConfig";



export const signIn = (email, password) => {
    return (dispatch, getState) => {
        projectAuth.signInWithEmailAndPassword(email, password)
            .then(response => {
                console.log("LOGIN", response)
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("LOGIN_ERROR", errorCode)
                // ...
            });

    }
};

export const signOut = () => {
    return (dispatch) => {
        projectAuth.signOut().then(function () {
            // Sign-out successful.
            console.log("Sign-out successful.")
        }).catch(function (error) {
            // An error happened.
            console.log("LOGOUT", error)
        });
    }

}

export const getAuth = () => {

    return (dispatch) => {
      projectAuth.onAuthStateChanged( async (user) => {
          try {
              if (user) {
                  // User is signed in.
                  console.log("User is signed in.", user)
                  await dispatch({type: "SET_AUTH", status: true})

              } else {
                  // No user is signed in.
                  console.log("No user is signed in")
                  await dispatch ({type: "SET_AUTH", status: false})
              }

          }catch (e){
              console.log(e)
          }


        })

    }

}
