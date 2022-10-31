import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { jobCardStyles as styles } from "./styles";
import Fa5Icons from "react-native-vector-icons/FontAwesome5";
import FaIcons from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

// component props
type Props = {
  status?: string;
  jobTitle: string;
  jobRoleTitle: string;
  jobRating: number;
  jobLocation: string;
  jobDetails: Array<
    {
      type: string;
      label: string;
      status?: string;
    }[]
  >;
  jobReq: Array<Record<"id" | "title", string>>;
  jobTimeline: {
    datePosted: string;
    directory: string;
  };
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
}: Props) => {
  return (
    <View style={styles.container}>
      <>
        <View
          style={styles.contentContainer}
        >
          <View>
            {status ? <Text style={styles.status}>{status}</Text> : null}
            <Text
              style={styles.jobTitle}
            >
              {jobTitle}
            </Text>
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
          <View
            style={styles.jobDetailsContainer}
          >
            {item.map((data) => (
              <Text style={styles.jobDetailsTag}>
                <MaterialIcons
                  name={data.label}
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
