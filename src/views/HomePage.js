import { React, useState, useEffect } from "react";
import introimage from '../assets/introimage.jpeg';

export default function HomePage() {
    const [spacexdata, setSpacexdata] = useState({});
    const [capsules, setCapsules] = useState([]);

    useEffect(() => {
        const getSpacexdata = async () => {
            const req = await fetch("https://api.spacexdata.com/v4/company");
            const res = await req.json();
            setSpacexdata(res);

            const reqCap = await fetch("https://api.spacexdata.com/v4/capsules");
            const resCap = await reqCap.json();
            setCapsules(resCap);
        };

        getSpacexdata();
    }, [])


    return (
        <>
            <section className="showcase">
                <div className="overlay">
                    <div className="containers">
                        <div className="p-5">
                            <h1 className="heading pb-2">{spacexdata.name}</h1>
                            <p>{spacexdata.summary}</p>
                        </div>
                        <div>
                            <img src={introimage} width='100%' height='100%'></img>
                        </div>
                    </div>
                    <div className="containers">
                        <div>
                            <h1 className="heading text-center capitalize">Capsule Filters</h1>
                            <div className="flex gap-5">
                                <input name="serial"  type='text' placeholder="Enter Serial Number"/>
                                <input name="serial" type='text' placeholder="Enter Serial Number" />
                                <input name="serial" type='text' placeholder="Enter Serial Number" />
                            </div>
                        </div>
                    </div>
                    <div className="containers flex-wrap">
                        <div className="w-full">
                            <h1 className="heading text-center capitalize mb-5">All Capsule DATA</h1>

                            <div className="overflow-auto grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-col-4">
                                {capsules.map(({id,type,status,serial,launches,last_update,land_landings,water_landings,reuse_count})=>(
                                    <article key={id} className="article">
                                        <h2 className="text-xl font-bold mb-5">{type}, <span>{serial}</span></h2>
                                        <ul>
                                            <li>{launches.length} launches</li>
                                            <li>{land_landings} land landings</li>
                                            <li>{water_landings} water landings</li>
                                            <li>Reused {reuse_count} times</li>
                                            {status === 'active' ? <li className="text-emerald-600">Active</li> : <li className="text-red-600">Retired</li>}
                                        </ul>

                                        <p>{last_update}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}