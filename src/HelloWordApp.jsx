// const newMesagge = {
//     message: 'Julio',
//     tittle: 'Es un titulo'
// };

// const GetName = (name) => {
//     return name;
// }
import PropTypes from 'prop-types'

export const HelloWordApp = ({ title, subTitle }) => {
    
    return (
        <>
            <h1> {title} </h1>
            {/* <code> {JSON.stringify(newMesagge)}</code> */}
            <p>{subTitle}</p>
        </>

    )
}


HelloWordApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}


HelloWordApp.defaultProps = {
    title: "no hay titulo"
}