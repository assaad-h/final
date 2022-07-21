import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import bench from './benchpress.jpg';
import squat from './squatrack.jpg';
import cables from './cables.jpg';
import rows from './seatedCableRow.jpg';
import treadmill from './treadmill.jpg';
import stairs from './stairs.jpg';
import Image from 'react-bootstrap/Image'

function MyMachines() {
    return (
        <div className="Machines">
            <Container fluid className="block-example border rounded border-dark" >
                <h1 style = {{padding: '10px'}}>Our Machines</h1>
                <div>
                    <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>Machine Name</th>
                            <th>Machine Illustration</th>
                            <th>Machine Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Bench Press</td>
                            <td><Image className="rounded mb-0 fluid" alt="100x100" src={bench} style={{width:'200px', height:'200px'}}/></td>
                            <td>The bench press is a compound exercise that targets the muscles of the upper body. It involves lying on a bench and pressing 
                                weight upward using either a barbell or a pair of dumbbells. During a bench press, you lower the weight down to chest level 
                                and then press upwards while extending your arms.
                            </td>
                        </tr>
                        <tr>
                            <td>Squat Rack</td>
                            <td><Image className="rounded mb-0 fluid" alt="100x100" src={squat} style={{width:'200px', height:'200px'}}/></td>
                            <td> A metal rack or cage consisting of support pillars with adjustable bars and hooks, using for supporting a barbell 
                                during heavy weightlifting exercises.</td>
                        </tr>
                        <tr>
                            <td>Cable Machine</td>
                            <td><Image className="rounded mb-0 fluid" alt="100x100" src={cables} style={{width:'200px', height:'200px'}}/></td>
                            <td>A cable machine is an item of equipment used in weight training or functional training. 
                                It consists of a rectangular, vertically oriented steel frame about 3 metres wide and 2 metres high, 
                                with a weight stack attached via a cable and pulley system to one or more handles.</td>
                        </tr>
                        <tr>
                            <td>Seated Row Machine</td>
                            <td><Image className="rounded mb-0 fluid" alt="100x100" src={rows} style={{width:'200px', height:'200px'}}/></td>
                            <td>The seated row is an exercise you can do with a weight machine to work the muscles in your upper back. 
                                Specifically, the seated row targets the muscles in your upper back and also the latissimus dorsi — 
                                a muscle on the outer side of the chest wall.</td>
                        </tr>
                        <tr>
                            <td>Treadmill</td>
                            <td><Image className="rounded mb-0 fluid" alt="100x100" src={treadmill} style={{width:'200px', height:'200px'}}/></td>
                            <td>A treadmill is a piece of exercise equipment that has a belt that loops around, driven by a motor. 
                                The continuous loop allows a person to walk or run on the treadmill in place. 
                                Treadmills are often used as part of aerobic exercise or as a warmup before doing strength training exercises.</td>
                        </tr>
                        <tr>
                            <td>Stair Master</td>
                            <td><Image className="rounded mb-0 fluid" alt="100x100" src={stairs} style={{width:'200px', height:'200px'}}/></td>
                            <td>A StairMaster is a stationary fitness machine that rotates steps, similar to a treadmill, 
                                allowing the user to climb upward at the speed and duration he or she sets. It can provide an above-average 
                                cardio workout, while also toning lower-body muscles, especially the quadriceps, hamstrings and calves.</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
}

export default MyMachines;