import React from "react"

const Home=() =>{
    const { isAuthorized } = useContext(Context);
    if (!isAuthorized) {
      return <Navigate to={"/login"} />;
    }
    return(
        <>
         <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
        <PopularCompanies />
      </section>
            
        </>
    )
        
    
}

export default Home
