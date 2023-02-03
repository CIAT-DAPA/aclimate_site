import CountryPartner from '../../components/countryPartner/CountryPartner';
import './Partners.css'
import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const URL_PARTNERS_DATA =
    "https://raw.githubusercontent.com/CIAT-DAPA/aclimate_site/main/data/partners.csv";

function Partners() {

    const [partners, setPartners] = useState([]);
    const [groupedPartners, setGroupedPartners] = useState({});

    useEffect(() => {
        Papa.parse(URL_PARTNERS_DATA, {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                setPartners(results.data);

                const grouped = results.data.reduce((acc, partner) => {
                    const country = partner.Pais;
                    if (!acc[country]) {
                        acc[country] = [];
                    }
                    acc[country].push(partner);
                    return acc;
                }, {});
                setGroupedPartners(grouped);
            },
        });
    }, []);

    return (
        <div>
            <div className="mb-4 text-white bg-title">
                <div className="container pb-3 px-4 container-news" style={{}}>
                    <div className="col-md-6 px-0">
                        <h1 className="display-4">
                            Partners
                        </h1>
                    </div>
                </div>
            </div>
            <div className='px-5'>
                {Object.keys(groupedPartners).map((country) => (
                    < CountryPartner key={country} country={country} partners={groupedPartners[country]} />
                ))}
            </div>
        </div >
    );
}

export default Partners;