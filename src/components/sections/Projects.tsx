'use client';
import { VerticalTimeline, VerticalTimelineElement    }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Projects() {
  return (
    <section id="proyectos" className="min-h-screen flex items-center justify-center px-4">
 
      <div className="container mx-auto max-w-6xl py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8  ">
          <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1ccebf', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2022 - present"
                iconStyle={{ background: '#1ccebf', color: '#000' }}
                icon={<>p</>}
              >
                <h3 className="vertical-timeline-element-title text-black font-bold text-2xl">Castine LLC 2022 - present</h3>
                <h4 className="vertical-timeline-element-subtitle font-bold text-xl">Frontend Technical Lead</h4>
                <p>
                  Frontend Technical Lead, Project Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1ccebf', color: '#000' }}
                date="2019 - 2022"
                iconStyle={{ background: '#1ccebf', color: '#000' }}
                icon={<>p</>}
              >
                      <h3 className="vertical-timeline-element-title text-black font-bold text-2xl">Mercado Libre 2019 - 2022</h3>
                      <h4 className="vertical-timeline-element-subtitle font-bold text-xl">Frontend Technical Lead</h4>
                <p>
                Frontend Technical Lead, Project Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1ccebf', color: '#000' }}
                date="2017 - 2019"
                iconStyle={{ background: '#1ccebf', color: '#000' }}
                icon={<>p</>}
              >
                      <h3 className="vertical-timeline-element-title text-black font-bold text-2xl">Lagash 2017 - 2019</h3>
                      <h4 className="vertical-timeline-element-subtitle font-bold text-xl">Frontend Technical Lead</h4>
                <p>
                Frontend Technical Lead, Project Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1ccebf', color: '#000' }}
                date="2015 - 2017"
                iconStyle={{ background: '#1ccebf', color: '#000' }}
                icon={<>p</>}
              >
                      <h3 className="vertical-timeline-element-title text-black font-bold text-2xl">Lagash 2015 - 2017</h3>
                      <h4 className="vertical-timeline-element-subtitle font-bold text-xl">Frontend Senior Developer</h4>
                <p>
            Wip
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1ccebf', color: '#000' }}
                date="2005 - 2015"
                iconStyle={{ background: '#1ccebf', color: '#000' }}
                icon={<>p</>}
              >
                      <h3 className="vertical-timeline-element-title text-black font-bold text-2xl">Target 2005 - 2015</h3>
                      <h4 className="vertical-timeline-element-subtitle font-bold text-xl">Frontend Senior Developer</h4>
                   
                <p>
            Wip
                </p>
              </VerticalTimelineElement>
              
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
} 