import PropTypes from 'prop-types';


const Card = ({ img }) => {
  return (
    <>
        
        <img src={img} alt="..." style={{height: "",maxWidth: "100%"}}  className="card-img-top card-img-bottom rounded-4"/>
      
         
        
     
    </>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired, // Change 'string' to the appropriate data type if needed
  
};

export default Card;