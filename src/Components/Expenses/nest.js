import './nest.css';

const Nest = (props) =>{
    const classes =  "nest " + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Nest;