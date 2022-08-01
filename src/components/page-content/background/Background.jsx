import classes from "../background/Background.module.sass"
const Background = props =>{
    return (
        <video className={classes.video} autoPlay loop muted>
        <source src={props.source} type="video/mp4" />
      </video>
    )
}
export default Background
