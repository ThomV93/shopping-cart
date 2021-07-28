import gitLogo from "../../Images/github.svg";

const Credits = () => {
  return (
    <>
      <div className="credits">
          <div>
            <p>Created by Thomas Veit</p>
            <a 
              href="https://github.com/ThomV93/shopping-cart" 
              target="_blank" 
              rel="noreferrer noopener">
              <img src={gitLogo} alt="gitLogo"/>
            </a>
          </div>
          <p>built with Pokémon TCG API</p>
        </div>
    </>
  )
}

export default Credits
