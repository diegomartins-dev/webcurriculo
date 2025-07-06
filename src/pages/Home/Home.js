import React, { useEffect, useRef, useState } from "react";
import * as db from '../../mocks/fakeDB.json';
import Header from "../../components/Header/Header";
import BoxSkills from "../../components/Box-skills/Box-skills";
import ListDefault from "../../components/List-Default/List-default";
import BoxAcademics from "../../components/Box-Academics/Box-academics";
import BoxCertifier from "../../components/Box-Certifier/Box-certifier";
import BoxKnowledge from "../../components/Box-Knowledge/Box-knowledge";
import BoxExperiences from "../../components/Box-Experiences/Box-experiences";
import Footer from "../../components/Footer/Footer";
import { generateProfessionalCV } from "../../utils/pdfGenerator";

const items = db.default;

const Home = () => {
  const contentRef = useRef();
  const [progress, setProgress] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleDownloadPDF = async () => {
    setGenerating(true);
    setProgress(0);

    try {
      const pdf = await generateProfessionalCV(items, setProgress);
      pdf.save("curriculo_profissional.pdf");
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
    } finally {
      setTimeout(() => {
        setGenerating(false);
        setProgress(0);
      }, 1000);
    }
  };

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    
    window.onresize = () => {
      setIsMobile(window.innerWidth <= 768);
    }

    return () => {
      window.onresize = null;
    }
  }, []);

  return (
    <React.Fragment>
      <div style={{ position: "fixed", top: 24, right: 12, zIndex: 1000 }}>
        {generating && (
          <div style={{ marginBottom: 8, width: "100%" }}>
            <div style={{ height: 8, background: "#eee", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ width: `${progress}%`, height: 8, background: "#1890ff", transition: "width 0.3s" }}></div>
            </div>
            <div style={{ fontSize: 12, color: "#555", marginTop: 2, textAlign: "right" }}>{progress}%</div>
          </div>
        )}
        <button 
          onClick={handleDownloadPDF} 
          style={{ 
            padding: isMobile ? "8px 16px" : "10px 20px", 
            fontSize: isMobile ? "14px" : "16px", 
            background: "#1890ff", 
            color: "#fff", 
            border: "none", 
            borderRadius: "4px", 
            cursor: generating ? "not-allowed" : "pointer", 
            opacity: generating ? 0.6 : 1, 
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            transition: "all 0.3s ease",
            transform: "translateY(0)",
            ":hover": {
              background: "#096dd9",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              transform: "translateY(-2px)"
            }
          }} 
          onMouseEnter={(e) => {
            if (!generating) {
              e.target.style.background = "#096dd9";
              e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
              e.target.style.transform = "translateY(-2px)";
            }
          }}
          onMouseLeave={(e) => {
            if (!generating) {
              e.target.style.background = "#1890ff";
              e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
              e.target.style.transform = "translateY(0)";
            }
          }}
          disabled={generating}
        >
          {isMobile ? "BaixarPDF" : "Gerar Currículo em PDF"}
        </button>
      </div>
      <div ref={contentRef} id="curriculo-content">
        <Header />

        <BoxSkills
          title={
            <React.Fragment>
              <span className="text--light text--capitalize">Perfil</span>{" "}
              Profissional
            </React.Fragment>
          }
        >
          <div className="row --no-padding">
            <div className="col-12">
              <p dangerouslySetInnerHTML={{ __html: items.perfil.content }}></p>
              <ListDefault
                items={items.perfil.details}
                class="--no-margin-bottom"
              ></ListDefault>
            </div>
          </div>
        </BoxSkills>

        <BoxSkills
          title={
            <React.Fragment>
              <span className="text--light text--capitalize">Formação</span>{" "}
              Acadêmica
            </React.Fragment>
          }
          ox
        >
          <div className="row --no-padding">
            <div className="col-12">
              <ul className="list-academics --no-list-style --no-padding-left --no-margin-bottom">
                {items.academics.map((item, index) => {
                  return (
                    <li key={index}>
                      <h3 className="box-skills__sub-title --no-margin">
                        {item.subtitle}
                      </h3>
                      <BoxAcademics items={item.details}></BoxAcademics>
                    </li>
                  );
                })}
                <li>
                  <BoxCertifier items={items.certifiers}></BoxCertifier>
                </li>
              </ul>
            </div>
          </div>
        </BoxSkills>

        <BoxSkills
          title={
            <React.Fragment>
              <span className="text--light text--capitalize">Conhecimentos</span>{" "}
              Profissionais
            </React.Fragment>
          }
        >
          {items.knowledges.map((item, index) => {
            return <BoxKnowledge key={index} items={item}></BoxKnowledge>;
          })}
        </BoxSkills>

        <BoxSkills
          title={
            <React.Fragment>
              <span className="text--light text--capitalize">Experiências</span>{" "}
              Profissionais
            </React.Fragment>
          }
        >
          <div className="row --no-padding">
            <div className="col-12">
              <BoxExperiences items={items.experiences}></BoxExperiences>
            </div>
          </div>
        </BoxSkills>

        <BoxSkills
          title={
            <React.Fragment>
              <span className="text--light text--capitalize">Informações</span>{" "}
              Pessoais
            </React.Fragment>
          }
        >
          <div className="row --no-padding">
            <div className="col-12">
              <p className="--no-margin-bottom">{items.info.content}</p>
            </div>
          </div>
        </BoxSkills>

        <BoxSkills
          subtitle={{ class: "--no-padding-top-bottom", content: "Contatos" }}
        >
          <div className="row --no-padding">
            <div className="col-md-12 col-lg-9">
              <ListDefault
                items={items.contacts}
                class="--no-margin-bottom --no-list-style --no-padding-left"
              ></ListDefault>
            </div>
          </div>
        </BoxSkills>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Home;
