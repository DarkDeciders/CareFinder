import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

interface Report {
  id: number;
  type: string;
  assignmentId: string;
  family: string;
  caregiver: string;
  date: string;
  time: string;
  status: string;
  result: string;
  issues: string[];
  notes: string;
}

const reports: Report[] = [
  {
    id: 1,
    type: "verification",
    assignmentId: "VER-2024-1201",
    family: "The Perera Family",
    caregiver: "Sarah Chen",
    date: "2024-12-20",
    time: "09:30",
    status: "submitted",
    result: "satisfactory",
    issues: [],
    notes:
      "Caregiver arrived on time and demonstrated excellent care standards. Child appeared happy and well-cared for.",
  },
  {
    id: 2,
    type: "quality_issue",
    assignmentId: "VER-2024-1199",
    family: "The Silva Family",
    caregiver: "Mike Johnson",
    date: "2024-12-19",
    time: "14:45",
    status: "under_review",
    result: "requires_attention",
    issues: ["cleanliness", "communication"],
    notes:
      "Observed minor cleanliness issues in elderly care area. Caregiver communication with family needs improvement.",
  },
  {
    id: 3,
    type: "incident",
    assignmentId: "VER-2024-1195",
    family: "The Fernando Family",
    caregiver: "Emma Williams",
    date: "2024-12-18",
    time: "11:20",
    status: "resolved",
    result: "incident_handled",
    issues: ["emergency_response"],
    notes:
      "Minor incident - child fell while playing. Caregiver responded appropriately with first aid and contacted parents immediately.",
  },
];

export default function ReportsScreen() {
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newReportType, setNewReportType] = useState("verification");
  const [newReportNotes, setNewReportNotes] = useState("");

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "submitted":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "under_review":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "resolved":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getResultColor = (result: string): string => {
    switch (result) {
      case "satisfactory":
        return "bg-green-100 text-green-800 border-green-200";
      case "requires_attention":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "incident_handled":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getReportTypeIcon = (type: string) => {
    switch (type) {
      case "verification":
        return "checkmark-circle-outline";
      case "quality_issue":
        return "warning-outline";
      case "incident":
        return "alert-circle-outline";
      default:
        return "document-outline";
    }
  };

  const submitNewReport = () => {
    if (!newReportNotes.trim()) {
      Alert.alert("Error", "Please add report notes before submitting.");
      return;
    }

    Alert.alert(
      "Report Submitted",
      "Your report has been submitted successfully.",
      [
        {
          text: "OK",
          onPress: () => {
            setShowCreateModal(false);
            setNewReportNotes("");
            setNewReportType("verification");
          },
        },
      ],
    );
  };

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="bg-white pt-12 pb-4 px-4 border-b border-gray-200">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-2xl font-bold text-gray-800">Reports</Text>
          <TouchableOpacity
            onPress={() => setShowCreateModal(true)}
            className="bg-blue-500 px-4 py-2 rounded-lg"
          >
            <Text className="text-white font-medium">+ New Report</Text>
          </TouchableOpacity>
        </View>

        {/* Report Summary */}
        <View className="flex-row justify-between">
          <View className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex-1 mr-2">
            <Text className="text-blue-800 text-2xl font-bold">
              {reports.length}
            </Text>
            <Text className="text-blue-600 text-sm">This Week</Text>
          </View>
          <View className="bg-green-50 border border-green-200 rounded-xl p-3 flex-1 mx-1">
            <Text className="text-green-800 text-2xl font-bold">
              {reports.filter((r) => r.result === "satisfactory").length}
            </Text>
            <Text className="text-green-600 text-sm">Satisfactory</Text>
          </View>
          <View className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex-1 ml-2">
            <Text className="text-yellow-800 text-2xl font-bold">
              {reports.filter((r) => r.status === "under_review").length}
            </Text>
            <Text className="text-yellow-600 text-sm">Under Review</Text>
          </View>
        </View>
      </View>

      <ScrollView
        className="flex-1 px-4 py-4"
        showsVerticalScrollIndicator={false}
      >
        {reports.map((report) => (
          <TouchableOpacity
            key={report.id}
            onPress={() => {
              setSelectedReport(report);
              setShowDetailModal(true);
            }}
            className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100"
          >
            {/* Report Header */}
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center">
                <View className="bg-gray-100 w-10 h-10 rounded-xl items-center justify-center mr-3">
                  <Ionicons
                    name={getReportTypeIcon(report.type)}
                    size={20}
                    color="#6b7280"
                  />
                </View>
                <View>
                  <Text className="text-lg font-semibold text-gray-800">
                    {report.type === "verification"
                      ? "Verification Report"
                      : report.type === "quality_issue"
                        ? "Quality Issue"
                        : "Incident Report"}
                  </Text>
                  <Text className="text-gray-600 text-sm">
                    {report.assignmentId}
                  </Text>
                </View>
              </View>
              <View
                className={`px-2 py-1 rounded-full border ${getStatusColor(report.status)}`}
              >
                <Text className="text-xs font-medium">
                  {report.status === "under_review"
                    ? "Under Review"
                    : report.status === "submitted"
                      ? "Submitted"
                      : "Resolved"}
                </Text>
              </View>
            </View>

            {/* Report Details */}
            <View className="mb-3">
              <View className="flex-row items-center mb-2">
                <Ionicons name="people-outline" size={16} color="#6b7280" />
                <Text className="text-gray-600 ml-2">
                  {report.family} • {report.caregiver}
                </Text>
              </View>
              <View className="flex-row items-center mb-2">
                <Ionicons name="time-outline" size={16} color="#6b7280" />
                <Text className="text-gray-600 ml-2">
                  {new Date(report.date).toLocaleDateString()} at {report.time}
                </Text>
              </View>
              {report.issues.length > 0 && (
                <View className="flex-row items-center">
                  <Ionicons name="warning-outline" size={16} color="#f59e0b" />
                  <Text className="text-yellow-600 ml-2 text-sm">
                    Issues: {report.issues.join(", ")}
                  </Text>
                </View>
              )}
            </View>

            {/* Result Badge */}
            <View className="flex-row justify-between items-center">
              <View
                className={`px-2 py-1 rounded-full border ${getResultColor(report.result)}`}
              >
                <Text className="text-xs font-medium">
                  {report.result === "satisfactory"
                    ? "Satisfactory"
                    : report.result === "requires_attention"
                      ? "Needs Attention"
                      : "Incident Handled"}
                </Text>
              </View>
              <TouchableOpacity>
                <Text className="text-blue-600 text-sm font-medium">
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Report Detail Modal */}
      <Modal
        visible={showDetailModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowDetailModal(false)}
      >
        <View className="flex-1 bg-white">
          <View className="pt-12 pb-4 px-4 border-b border-gray-200">
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-bold text-gray-800">
                Report Details
              </Text>
              <TouchableOpacity onPress={() => setShowDetailModal(false)}>
                <Ionicons name="close" size={24} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>

          {selectedReport && (
            <ScrollView className="flex-1 px-4 py-4">
              <View className="bg-gray-50 rounded-2xl p-4 mb-4">
                <Text className="text-lg font-semibold text-gray-800 mb-2">
                  {selectedReport.type === "verification"
                    ? "Verification Report"
                    : selectedReport.type === "quality_issue"
                      ? "Quality Issue Report"
                      : "Incident Report"}
                </Text>
                <Text className="text-gray-600 mb-1">
                  ID: {selectedReport.assignmentId}
                </Text>
                <Text className="text-gray-600 mb-1">
                  Family: {selectedReport.family}
                </Text>
                <Text className="text-gray-600">
                  Caregiver: {selectedReport.caregiver}
                </Text>
              </View>

              <View className="bg-white rounded-2xl p-4 mb-4 border border-gray-200">
                <Text className="text-base font-semibold text-gray-800 mb-3">
                  Report Notes
                </Text>
                <Text className="text-gray-600 leading-5">
                  {selectedReport.notes}
                </Text>
              </View>

              {selectedReport.issues.length > 0 && (
                <View className="bg-yellow-50 rounded-2xl p-4 mb-4 border border-yellow-200">
                  <Text className="text-base font-semibold text-yellow-800 mb-3">
                    Issues Identified
                  </Text>
                  <View className="flex-row flex-wrap">
                    {selectedReport.issues.map((issue, index) => (
                      <View
                        key={index}
                        className="bg-yellow-100 px-3 py-1 rounded-full mr-2 mb-2"
                      >
                        <Text className="text-yellow-800 text-sm font-medium">
                          {issue
                            .replace("_", " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}

              <TouchableOpacity className="bg-blue-500 rounded-xl py-4 items-center mt-4">
                <Text className="text-white font-semibold">
                  Download PDF Report
                </Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </View>
      </Modal>

      {/* Create New Report Modal */}
      <Modal
        visible={showCreateModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowCreateModal(false)}
      >
        <View className="flex-1 bg-white">
          <View className="pt-12 pb-4 px-4 border-b border-gray-200">
            <View className="flex-row items-center justify-between">
              <Text className="text-xl font-bold text-gray-800">
                Create New Report
              </Text>
              <TouchableOpacity onPress={() => setShowCreateModal(false)}>
                <Ionicons name="close" size={24} color="#6b7280" />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView className="flex-1 px-4 py-4">
            <View className="bg-white rounded-2xl p-4 mb-4 border border-gray-200">
              <Text className="text-base font-semibold text-gray-800 mb-3">
                Report Type
              </Text>
              <View className="space-y-2">
                {[
                  {
                    value: "verification",
                    label: "Verification Report",
                    icon: "checkmark-circle-outline",
                  },
                  {
                    value: "quality_issue",
                    label: "Quality Issue Report",
                    icon: "warning-outline",
                  },
                  {
                    value: "incident",
                    label: "Incident Report",
                    icon: "alert-circle-outline",
                  },
                ].map((type) => (
                  <TouchableOpacity
                    key={type.value}
                    onPress={() => setNewReportType(type.value)}
                    className={`flex-row items-center p-3 rounded-xl border-2 ${
                      newReportType === type.value
                        ? "bg-blue-50 border-blue-300"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <Ionicons
                      name={type.icon as any}
                      size={24}
                      color={
                        newReportType === type.value ? "#3b82f6" : "#6b7280"
                      }
                    />
                    <Text
                      className={`ml-3 font-medium ${
                        newReportType === type.value
                          ? "text-blue-800"
                          : "text-gray-800"
                      }`}
                    >
                      {type.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View className="bg-white rounded-2xl p-4 mb-4 border border-gray-200">
              <Text className="text-base font-semibold text-gray-800 mb-3">
                Assignment
              </Text>
              <View className="bg-gray-50 border border-gray-300 rounded-xl p-3">
                <Text className="text-gray-800 font-medium">VER-2024-1204</Text>
                <Text className="text-gray-600 text-sm">
                  The Jayawardene Family • David Lee
                </Text>
              </View>
            </View>

            <View className="bg-white rounded-2xl p-4 mb-4 border border-gray-200">
              <Text className="text-base font-semibold text-gray-800 mb-3">
                Report Details
              </Text>
              <TextInput
                className="bg-gray-50 border border-gray-300 rounded-xl p-3 h-32 text-gray-800"
                placeholder="Provide detailed observations and notes..."
                placeholderTextColor="#9ca3af"
                multiline
                textAlignVertical="top"
                value={newReportNotes}
                onChangeText={setNewReportNotes}
              />
            </View>

            <View className="flex-row space-x-3 mt-4">
              <TouchableOpacity
                onPress={() => setShowCreateModal(false)}
                className="flex-1 bg-gray-100 rounded-xl py-4 items-center"
              >
                <Text className="text-gray-700 font-semibold">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={submitNewReport}
                className="flex-1 bg-blue-500 rounded-xl py-4 items-center"
              >
                <Text className="text-white font-semibold">Submit Report</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
