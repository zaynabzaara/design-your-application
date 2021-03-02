// import React, { useEffect } from "react";
// import loadUser from '../Actions/authActions';
import { useSelector } from "react-redux";

const Home = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if(auth){
  //   return dispatch(loadUser())
  //   }

  // }, [dispatch, auth]);
  const auth = useSelector((state) => state.auth);

  return (
    <div className="text">
     
      {auth.isAuth ? (

        <>
         <h2>Welcome {auth.userName}</h2>
        <p>
          <b>Quick Guide:</b> &ensp; After Signing in, a profile zone will appear
          up-right the screen with the label <b>"Niepcers"</b> where you can consult,
          post, edit and delete your own photos. You will start with empty
          profile, so feel free to add your best shots that you want to share.
          
            All your publications will be posted publicly up-left in the <b>Hall of Fame</b>
          
          
        </p>
        </>
      ) : (
      <>
         <h2>Welcome Niepcers</h2>
        <p>
          Inspired by the inventor of photography "<b>Nicéphore Niépce</b>",
          this platform is an open space for sharing photos and breathtaking
          shots, between photographers or as we named them <b>Niepcers</b>.
        </p>
        </>
      )}

      <h1> The World Through Your Eyes </h1>
    
    </div>
  );
};

export default Home;
