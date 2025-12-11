import HeroSection from './Shared/HeroSection';
import StatsSection from './Shared/StatsSection';
import AboutSection from './Shared/AboutSection';
import SyllabusSection from './Shared/SyllabusSection';
import ToolsSection from './Shared/ToolsSection';
import ProjectsSection from './Shared/ProjectsSection';
import ReviewsSection from './Shared/ReviewsSection';

export default function CoursePage({ courseData }) {
    if (!courseData) {
        return <div className="min-h-screen flex items-center justify-center">Course data not found.</div>;
    }

    return (
        <div className="min-h-screen bg-white">
            <HeroSection hero={courseData.hero} />
            <StatsSection stats={courseData.stats} />
            <AboutSection about={courseData.about} />
            <SyllabusSection syllabus={courseData.syllabus} />
            <ToolsSection tools={courseData.tools} />
            <ProjectsSection projects={courseData.projects} />
            <ReviewsSection reviews={courseData.reviews} />
        </div>
    );
}
