'use client';
import { VerticalTimeline, VerticalTimelineElement    }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BookmarkFilledIcon, SketchLogoIcon } from '@radix-ui/react-icons';

export default function Projects() {
  return (
    <section id="proyectos" className="min-h-screen flex items-center justify-center px-4">
 
      <div className="container mx-auto max-w-6xl py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8  ">
          <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#3A7A74', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2022 - present"
                iconStyle={{ background: '#1ccebf', color: '#000' }}
                icon={<BookmarkFilledIcon />}
              >
                <h3 className="vertical-timeline-element-title  font-bold text-2xl ">Castine LLC 2022 - present</h3>
                <h4 className="vertical-timeline-element-subtitle text-[#1DCFC0] font-bold text-xl">Frontend Technical Lead</h4>
                <p className='text-white'>
                Implementation of new modules, design in Figma, planning, sizing, development, testing, and follow-up.
                </p>
                <p className='text-white'>
                Team management and handling of internal and external client requirements.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#3A7A74', color: '#000' }}
                date="2019 - 2022"
                iconStyle={{ background: '#1ccebf', color: '#000' }}
                icon={<SketchLogoIcon />}
              >
                      <h3 className="vertical-timeline-element-title text-black font-bold text-2xl">Mercado Libre 2019 - 2022</h3>
                      <h4 className="vertical-timeline-element-subtitle text-[#1DCFC0] font-bold text-xl">Frontend Technical Lead & Team Lead</h4>
                      <p className='text-white'>
                Implementation of new modules, planning, sizing, development, testing, and follow-up.
                </p>
                <p className='text-white'>
                Team management and handling of internal and external client requirements.
                </p>
                <p className='text-white'>Follow-up of tasks and cross-team front-end initiatives in Argentina. </p>
                <p className='text-white'>Project management, including career planning and goal tracking.</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#3A7A74', color: '#000' }}
                date="2017 - 2019"
                iconStyle={{ background: '#1ccebf', color: '#000' }}
                icon={<SketchLogoIcon />}
              >
                      <h3 className="vertical-timeline-element-title text-black font-bold text-2xl">Lagash 2017 - 2019</h3>
                      <h4 className="vertical-timeline-element-subtitle text-[#1DCFC0] font-bold text-xl">Frontend Technical Lead</h4>
                      <p className='text-white'>
                Implementation of new modules, planning, sizing, development, testing, and follow-up.
                </p>
                <p className='text-white'>
                Team management and handling of internal and external client requirements.
                </p>
                <p className='text-white'>Follow-up of tasks and cross-team front-end initiatives. </p>
                <p className='text-white'>Bootcamp Teacher and Mentor in the company.</p>
             
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#3A7A74', color: '#000' }}
                date="2015 - 2017"
                iconStyle={{ background: '#1ccebf', color: '#000' }}
                icon={<SketchLogoIcon />}
              >
                      <h3 className="vertical-timeline-element-title text-black font-bold text-2xl">Lagash 2015 - 2017</h3>
                      <h4 className="vertical-timeline-element-subtitle text-[#1DCFC0] font-bold text-xl">Frontend Senior Developer</h4>
                <p className='text-white'>
            Wip
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#3A7A74', color: '#000' }}
                date="2005 - 2015"
                iconStyle={{ background: '#1ccebf', color: '#000' }}
                icon={<SketchLogoIcon />}
              >
                      <h3 className="vertical-timeline-element-title text-black font-bold text-2xl">Target 2005 - 2015</h3>
                      <h4 className="vertical-timeline-element-subtitle text-[#1DCFC0] font-bold text-xl">Frontend Senior Developer</h4>
                   
                <p className='text-white'>
            Wip
                </p>
              </VerticalTimelineElement>
              
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
} 