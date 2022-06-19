// const newMesagge = {
//     message: 'Julio',
//     tittle: 'Es un titulo'
// };

// const GetName = (name) => {
//     return name;
// }
import PropTypes from 'prop-types'

export const HelloWordApp = ({ title, subTitle, name }) => {

    return (
        <>
            <h1 data-testid="test-title"> {title} </h1>
            {/* <code> {JSON.stringify(newMesagge)}</code> */}
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>

    )
}


HelloWordApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}


HelloWordApp.defaultProps = {
    // title: "no hay titulo",
    subTitle: 'no hay subtitulo',
    name: 'no hay nombre'
}