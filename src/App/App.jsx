import SectionCar from "../SectionCard/SectionCar"
import iconSedan from "../../images/icon-sedans.svg"
import iconSuvs from "../../images/icon-suvs.svg"
import iconLuxury from "../../images/icon-luxury.svg"

const App = () => {
    return(
        <>
        <section>
        <SectionCar 
        titulo="SEDANS"
        texto="Chose a sedan for its affordability and excelent fuel econmy. Idal for crusing in the city or no your next road trip"
        image={iconSedan}
        // color="hsl(31, 77%, 52%)"
        // borda={true}
        />

        <SectionCar 
        titulo="SUVS"
        texto="Chose a sedan for its affordability and excelent fuel econmy. Idal for crusing in the city or no your next road trip"
        image={iconSuvs}
        // color=" hsl(184, 100%, 22%)"
        />

       <SectionCar 
        titulo="LUXURY"
        texto="Chose a sedan for its affordability and excelent fuel econmy. Idal for crusing in the city or no your next road trip"
        image={iconLuxury}
        // color="hsl(179, 100%, 13%)"
        Classe = "luxury"
        />
        </section>
        </>
        )
}
export default App;