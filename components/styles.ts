import { StyleSheet } from "react-native";

const jobCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#2a2a2a",
    padding: 14,
    borderRadius: 8,
    justifyContent: "space-between",
    marginVertical: 10,
  },
  contentContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  status: {
    color: "orange",
  },
  jobTitle: { paddingVertical: 2, fontSize: 20, fontWeight: "500" },
  jobRoleTitle: { flexDirection: "row", paddingVertical: 2 },
  jobDetailsTag: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 8,
    borderRadius: 4,
    marginVertical: 5,
  },
  jobReqItem: {
    paddingVertical: 2,
  },
  jobRating: { marginLeft: 8, fontWeight: "700" },
  moreIcon: { marginTop: 10 },
  jobDetailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  }
});

export { jobCardStyles };
