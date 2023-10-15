import React from "react";
import { View, Text, ScrollView, StatusBar, StyleSheet } from "react-native";
import JobsCard from "../components/JobCard";
import { jobsData } from "../utils/jobsData";

const JobsScreen = () => {
  return (
    <>
      <StatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          {Array.isArray(jobsData) && jobsData.length > 0
            ? jobsData.map((entry) => (
                <JobsCard
                  status={entry.status}
                  jobTitle={entry.jobTitle}
                  jobRoleTitle={entry.jobRoleTitle}
                  jobRating={entry.jobRating}
                  jobLocation={entry.jobLocation}
                  jobDetails={entry.jobDetails}
                  jobReq={entry.jobReq}
                  jobTimeline={entry.jobTimeline}
                  key={entry.id}
                  keyChild={entry.id}
                />
              ))
            : null}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 14,
  },
});

export default JobsScreen;
