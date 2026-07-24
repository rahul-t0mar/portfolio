import ProjectsList from "../Components/ProjectsList"


function ProjectsPage() {
    return (
        <div className={`mt-20 flex flex-col`}>
            <h1 className='text-6xl text-center mb-5'>My Recent <span>Works</span></h1>
            <ProjectsList />
        </div>
    )
}

export default ProjectsPage
