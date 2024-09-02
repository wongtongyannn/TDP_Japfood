import "./Displaymsg.css";

const Displaymsg = (props) => {

    return (
    <section id="sushi">
        <div class="content">
        <h1>{props.whatever_message}</h1>
        </div>
    </section>
    )
    }
    
export default Displaymsg;