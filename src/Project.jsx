import React from "react";
import "./index.css"


const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Riverfront Cultural Centre",
      image:
        "https://plus.unsplash.com/premium_photo-1754251240676-6b18eddf38df?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year_started: 2021,
      year_completed: 2024,
      location: "Bengaluru",
      description:
        "A mixed-use cultural hub along the riverbank with galleries and an amphitheater.",
    },
    {
      id: 2,
      title: "Hilltop Eco Lodge",
      image:
        "https://plus.unsplash.com/premium_photo-1661926167964-79f3d4c27110?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year_started: 2022,
      year_completed: 2025,
      location: "Coorg",
      description:
        "Low-impact lodging using local materials and passive cooling.",
    },
    {
      id: 3,
      title: "Glass Pavilion Residence",
      image:
        "https://plus.unsplash.com/premium_photo-1661876567457-d9bd96f4b67f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year_started: 2019,
      year_completed: 2020,
      location: "Hyderabad",
      description:
        "Private residence featuring full-height glass façades and courtyard gardens.",
    },
    {
      id: 4,
      title: "Sunrise Affordable Housing",
      image:
        "https://images.unsplash.com/photo-1741704098271-b080987c3b4c?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year_started: 2020,
      year_completed: 2023,
      location: "Pune",
      description:
        "Cost-effective multi-unit housing with shared amenities and rooftop gardens.",
    },
    {
      id: 5,
      title: "TechPark Tower B",
      image:
        "https://plus.unsplash.com/premium_photo-1724122058109-3028636e594e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year_started: 2023,
      year_completed: 2025,
      location: "Chennai",
      description:
        "Grade A office tower with flexible floorplates and sky gardens.",
    },
    {
      id: 6,
      title: "Heritage Library Renovation",
      image:
        "https://images.unsplash.com/photo-1702974915123-16739a9c3577?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year_started: 2018,
      year_completed: 2020,
      location: "Mumbai",
      description:
        "Sensitive restoration and adaptive reuse of a colonial-era library building.",
    },
  ];

  return (
    <section id="project" className="project-section py-5">
      <div className="container">
        <h1 className="text-center mb-5 text-light">OUR PROJECTS</h1>
        <div className="row g-4">
          {projects.map((value) => {
            return (
              <div key={value.id} className="col-md-4">
                <div className="card project-card h-100 shadow-sm border-0">
                  {value.image && (
                    <img
                      src={value.image}
                      alt={value.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <p className="text-muted mb-1">📍 {value.location}</p>
                    <p className="fw-bold">
                      {value.year_started} - {value.year_completed}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
