export const Footer = () => {
  return (
    <>
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="text-center text-white">
                <p className="fs-4 mb-3">GuitarLA</p>
                <p className="fs-5 mb-3">Desarrollado por <strong>Jesús Pineda</strong></p>
                
                <div className="d-flex justify-content-center gap-4 flex-wrap">
                  <a 
                    href="https://jesus-pineda-portafolio.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none d-flex align-items-center gap-2 hover-link"
                  >
                    <i className="fas fa-globe"></i>
                    <span>Sitio Web</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/jesús-pineda-630a3b300" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none d-flex align-items-center gap-2 hover-link"
                  >
                    <i className="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://github.com/JesusPineda29" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none d-flex align-items-center gap-2 hover-link"
                  >
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                </div>
                
                <p className="mt-3 mb-0 text-muted">
                  © {new Date().getFullYear()} - Todos los derechos reservados
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        .hover-link {
          transition: all 0.3s ease;
        }
        .hover-link:hover {
          color: #0d6efd !important;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  )
}