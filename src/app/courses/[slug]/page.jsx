"use client";
import { notFound } from 'next/navigation';
import CoursePage from '../../../components/Courses/CoursePage';
import { courseDetails } from '../../../data/courseDetails';

export default function Page({ params }) {
    const { slug } = params;
    const data = courseDetails[slug];

    if (!data) {
        return notFound();
    }

    return <CoursePage courseData={data} />;
}
