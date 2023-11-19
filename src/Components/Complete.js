import React, { useEffect, useState } from 'react';
import { CiShare1 } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";

const Complete = () => {
    
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedActionReason, setSelectedActionReason] = useState('All');
    const [selectedRiskLevel, setSelectedRiskLevel] = useState('All');

    // Handeling Data Fetching

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('./Completedata.json');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Handeling Search & Filter Functionality 

    useEffect(() => {
       
        const filteredResults = data.filter((d) =>
            (selectedActionReason === 'All' || d.actionTaken === selectedActionReason) &&
            (selectedRiskLevel === 'All' || d.riskLevel === selectedRiskLevel) &&
            (d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                d.email.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredData(filteredResults);
    }, [searchTerm, data, selectedActionReason, selectedRiskLevel]);

    return (
        <>
            <div className='flex gap-5 pb-2 '>
                <div className='flex w-[300px] border-[#E4E4E4] border-2 p-2 rounded-md'>
                    <div className='text-2xl text-[#ADADAD] pr-1'><IoMdSearch /></div>
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='outline-none border-none'
                        type='text'
                        placeholder='Search'
                    />
                </div>
                <div>
                    <select
                        value={selectedActionReason}
                        onChange={(e) => setSelectedActionReason(e.target.value)}
                        className='bg-[#F5F5F5] p-2 rounded-md'
                    >
                        <option value="All">Action Reason</option>
                        <option value="Flagged">Flagged</option>
                        <option value="Closed">Closed</option>
                        <option value="Cleared">Cleared</option>
                        <option value="SOI requested">SOI requested</option>
                    </select>
                </div>
                <div>
                    <select
                        value={selectedRiskLevel}
                        onChange={(e) => setSelectedRiskLevel(e.target.value)}
                        className='bg-[#F5F5F5] p-2 rounded-md'
                    >
                        <option value="All">Risk Level</option>
                        <option value="Hard">Hard</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </div>

            <div>
                <table className='min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden'>
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-md leading-5 text-[#050505] ">
                            <th className="px-6 py-3 text-left font-medium">User</th>
                            <th className="px-6 py-3 text-left font-medium">Risk Level</th>
                            <th className="px-6 py-3 text-left font-medium">Action reason</th>
                            <th className="px-6 py-3 text-left font-medium">Time to close</th>
                            <th className="px-6 py-3 text-left font-medium">Date added on</th>
                            <th className="px-6 py-3 text-left font-medium">Action taken by</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((d) => (
                            <tr key={d.id} className="border-b border-gray-200">
                                <td className="px-6 py-4 whitespace-no-wrap flex w-[300px] justify-between">
                                    <div className="leading-5 text-gray-900 flex flex-col gap-2">
                                        <p className='text-md font-semibold'>{d.name}</p>
                                        <p className='text-sm text-[#777676] font-semibold'>{d.email}</p>
                                    </div>
                                    <div className="pt-3 text-[#4643EE] font-bold text-xl cursor-pointer">
                                        <CiShare1 />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-900 font-semibold">
                                        {d.riskLevel === "High" ? (
                                            <div className="flex gap-2">
                                                <p className="h-[10px] w-[10px] rounded-full bg-[#7D2424] mt-1"></p>
                                                <p className="text-[#7D2424]">{d.riskLevel}</p>
                                            </div>
                                        ) : d.riskLevel === "Medium" ? (
                                            <div className="flex gap-2">
                                                <p className="h-[10px] w-[10px] rounded-full bg-[#88670F] mt-1"></p>
                                                <p className="text-[#88670F]">{d.riskLevel}</p>
                                            </div>
                                        ) : d.riskLevel === "Low" ? (
                                            <div className="flex gap-2">
                                                <p className="h-[10px] w-[10px] rounded-full bg-[#006540] mt-1"></p>
                                                <p className="text-[#006540]">{d.riskLevel}</p>
                                            </div>
                                        ) : (
                                            <p>Loading</p>
                                        )}

                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-900 font-semibold">{d.actionTaken}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap">
                                    <div className="text-sm leading-5 text-gray-900 font-semibold">{d.timeToClose}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                    <div className="text-sm leading-5 text-[#777676] font-semibold">{d.date}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                    <div className="leading-5 text-gray-900 ">
                                        <p className='font-semibold text-md'>{d.actionTakenBy}</p>
                                        <p className='text-sm text-[#777676] font-semibold'>{d.actionTakenByMail}</p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Complete;
