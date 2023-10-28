import FaIcons from "@expo/vector-icons/FontAwesome";
import Fa5Icons from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { jobCardStyles as styles } from "./styles";

// component props
type Props = {
    status?: string;
    jobTitle: string;
    jobRoleTitle: string;
    jobRating: number;
    jobLocation: string;
    jobDetails: {
        type: string;
        label: string;
        status?: string;
    }[][];
    jobReq: Record<"id" | "title", string>[];
    jobTimeline: {
        datePosted: string;
        directory: string;
    };
    keyChild: string;
};

const JobsCard = ({
    status,
    jobTitle,
    jobRoleTitle,
    jobRating,
    jobLocation,
    jobDetails,
    jobReq,
    jobTimeline,
    keyChild,
}: Props) => {
    return (
        <View style={styles.container}>
            <>
                <View style={styles.contentContainer}>
                    <View>
                        {status ? <Text style={styles.status}>{status}</Text> : null}
                        <Text style={styles.jobTitle}>{jobTitle}</Text>
                        <View style={styles.jobRoleTitle}>
                            <Text>{jobRoleTitle}</Text>
                            <Text style={styles.jobRating}>
                                {jobRating.toFixed(1)}
                                <FaIcons name="star" color="orange" />
                            </Text>
                        </View>
                        <Text>{jobLocation}</Text>
                    </View>
                    <TouchableOpacity style={styles.moreIcon}>
                        <Fa5Icons name="ellipsis-v" size={15} />
                    </TouchableOpacity>
                </View>
                {jobDetails.map((item) => (
                    <View style={styles.jobDetailsContainer} key={`${keyChild} + ${Math.random() * 100}`}>
                        {item.map((data) => (
                            <Text style={styles.jobDetailsTag} key={keyChild + data.type}>
                                <MaterialIcons
                                    name={data.type as keyof typeof MaterialIcons.glyphMap}
                                    size={15}
                                    color={data.status === "priority" ? "orange" : undefined}
                                />
                                <Text>{`  ${data.label}`}</Text>
                            </Text>
                        ))}
                    </View>
                ))}
                {Array.isArray(jobReq) && jobReq.length > 0
                    ? jobReq.map(({ id, title }) => (
                          <Text key={id} style={styles.jobReqItem}>
                              {`\u2022  `}
                              {title}
                          </Text>
                      ))
                    : null}
            </>
            <View style={{ marginTop: 24, flexDirection: "row" }}>
                <Text>{jobTimeline.datePosted}</Text>
                <Text style={{ marginHorizontal: 8 }}>{`\u2022`}</Text>
                <Text>
                    <Text>{`From `}</Text>
                    <Text style={{ fontWeight: "500" }}>{jobTimeline.directory}</Text>
                </Text>
            </View>
        </View>
    );
};

export default JobsCard;
