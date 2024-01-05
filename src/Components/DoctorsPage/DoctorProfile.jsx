import PagaTitle from "../Shared/PagaTitle";
import ProfileCard from "./ProfileCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
export default function DoctorProfile() {
    return (
        <div>
            <PagaTitle MainTitle={"Doctors profile"} />
            <div className="mx-4 lg:mx-48">
                <ProfileCard />
                <div>
                    <Tabs>
                        <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Locations</Tab>
                            <Tab>Reviews</Tab>
                            <Tab>Bussiness hours</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto quaerat iste quod fugit quia dolor eius. Aliquid, reiciendis voluptatibus et sint beatae tenetur voluptate?</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Dhanmondi, Dhaka, Bangladesh - Get Directions</h2>
                        </TabPanel>
                        <TabPanel>
                            <Rating
                                style={{ maxWidth: 140 }}
                                value={4.5}
                                readOnly
                            />
                        </TabPanel>
                        <TabPanel>
                            <h2>Mon - fri 10am to 9om</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
