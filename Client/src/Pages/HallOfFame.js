import { makeStyles } from "@material-ui/core/styles";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import React, {  useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../Actions/PostActions";

import { getPosts } from "../Actions/PostActions";

import moment from "moment";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";




const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  gridList: {
    margin: "10px 20px" ,
    width: "80%",
    height: "auto%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.8)",
  },
}));

const TitlebarGridList = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  // const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [ dispatch]);

  return (
    <div className={classes.root}>
      <GridList cellHeight={600}  className={classes.gridList}>
        {posts.map((tile) => (
          <GridListTile className="zoom" key={tile.selectedFile}>
            
            <img className="imgs" src={tile.selectedFile} alt={tile.title} />
            
            <GridListTileBar
              title={tile.title}
              subtitle={
                <span>
                  {" "}
                  by: {tile.creator} / {moment(tile.createdAt).fromNow()}
                </span>
              }
              actionIcon={
                <button
                  className="btn"
                  size="small"
                  color="Primary"
                  onClick={() => dispatch(likePost(tile._id))}
                >
                  <ThumbUpAltIcon fontSize="small" />   {tile.likeCount}{" "}
                </button>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default TitlebarGridList;
