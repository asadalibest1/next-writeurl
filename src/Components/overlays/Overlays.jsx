
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



const Overlays = ({ children, overlay }) => {
    return (

        <OverlayTrigger
            placement="bottom-end"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip" >
                {overlay}
            </Tooltip>}>
            {children}
        </OverlayTrigger>

    )
}


export default Overlays;