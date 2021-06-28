import React from 'react';
import './nav.css';
import Founder from './founder1.jpg';

const Blogs = () => {
return (
	<div>
		<div className="header">
           <h2>Blog Name</h2>
        </div>

        <div className="row">
            <div className="leftcolumn">
                <div className="card">
                   <h2>TITLE HEADING</h2>
                   <h5>Title description, Dec 7, 2017</h5>
                   <div className="fakeimg" style={{height: '200px'}}>Image</div>
                   <p>Some text..</p>
                </div>
                <div className="card">
                   <h2>TITLE HEADING</h2>
                   <h5>Title description, Sep 2, 2017</h5>
                   <div className="fakeimg" style={{height: '200px'}}>Image</div>
                    <p>Some text..</p>
                </div>
            </div>
            <div className="rightcolumn">
                <div className="card">
                    <h2>About Me</h2>
                    <div className="fakeimg" style={{height: '200px'}}>
                        <img src={Founder}  alt="Founder" />
                    </div>
                    <p>Sai Abhinay Chepuri is a third year Under Graduate student from Lovely Professional University, pursuing BTech in CSE. Sai describes himself as a passionate learner. According to him, in the era of modern technology, a person should be up to date with current market states and requirements. His articles have been featured on many online platforms like IMDB. He had been awarded as Emerging Entrepreneur of the Year 2019 at SWI International Awards.
                       This 20-year-old runs two Startups, where the first startup, Make It Memorable (MIM) Creative Works, aims at providing talented folks with a platform to showcase their skills.
                        The second startup, Enviropromise fosters the idea of organic farming among the farmers. Sai is also an enthusiastic writer and a business analyst.

                       <h1>Idea Behind The Starup:</h1>
                        According to Sai, as a kid the thought of bridging the gap between job seeker and the mainstay inspired him. He wanted to help the talented cream, which is untouched by various industries due to lack of resources. This idea became the founding stone of his first startup Make It Memorable (MIM). His team started by arranging various talent hunt contests. Through these contests, his team short lists the candidates according to industry requirements and recommend them to various HR personals.
                        Sai managed to open a second venture, Enviropromise, with the help of his batch mate Shiva Kumar who is one of the co-founders. Shiva’s father is in involved in farming from past twenty-eight years. Sai and Shiva collaborated with their mutual aim to contribute to the environment. They began by discussing with Shiva’s father, the harmful effects of cultivating with chemical pesticides. They convinced him to shift to organic farming. Taking his support, they convinced other farmers, in and around their villages to practice organic farming.

                       <h2>Hurdles:</h2>
                         For Sai, convincing his family about his decision to take up his startups over college placements was a difficult task. Sai started out his first startup as a lone wolf. This meant handling all the work single-handedly, while simultaneously balancing his academics.  The startup saw a slow but a gradual growth in terms of team members. Now he has a team of skilled employees along with interns.

                         <h3>Road Ahead:</h3>
                         Being a visionary, Sai aims to expand the business in the coming years and to indulge more work forces into the venture. He is planning to shift to a complete digital approach for both the businesses. Amid pandemic, Enviropromise has a decent growth as people have become more health and hygiene conscious, thus inclining towards chemical free food produces.
                    </p>
                </div>
                <div classNmae="card">
                    <h3>Popular Post</h3>
                    <div className="fakeimg">Image</div>
                    <div className="fakeimg">Image</div>
                    <div className="fakeimg">Image</div>
                </div>
                <div className="card">
                   <h3>Follow Me</h3>
                   <p>Some text..</p>
                </div>
            </div>
        </div>
	</div>
);
};

export default Blogs;
