import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemList: [
    {
      id: 1,
      name: "Audio-to-Text Conversion",
      description: "Transcribe spoken words in audio files into text.",
      gradient: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
      color: "text-white",
    },
    {
      id: 2,
      name: "Video-to-Text Conversion",
      description:
        "Extract text content from videos, making it searchable and accessible.",
      gradient: "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
      color: "text-white",
    },
    {
      id: 3,
      name: "Text-to-Summary",
      description:
        "Use natural language processing to generate concise summaries of lengthy text.",
      gradient: "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
      color: "text-purple-700",
    },
    {
      id: 4,
      name: "Audio-to-Summary",
      description:
        "Provide summarized versions of audio content, making it easier for users to grasp key points.",
      gradient: "bg-gradient-to-r from-gray-700 via-gray-900 to-black",
      color: "text-white",
    },
    {
      id: 5,
      name: "Video-to-Summary",
      description:
        "Automatically generate brief summaries or highlights from videos.",
      gradient: "bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100",
      color: "text-pink-500",
    },
    {
      id: 6,
      name: "Generative AI Stories/Poetry",
      description:
        "Engage users with AI-generated creative writing based on user prompts or themes.",
      gradient: "bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500",
      color: "text-amber-700",
    },
    {
      id: 7,
      name: "Language Translation",
      description:
        "Incorporate a translation module to translate content into different languages.",
      gradient: "bg-gradient-to-r from-yellow-200 via-green-200 to-green-500",
      color: "text-green-700",
    },
    {
      id: 8,
      name: "Sentiment Analysis",
      description:
        "Analyze the sentiment of text, audio, or video content, providing insights into emotional tones.",
      gradient: "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600",
      color: "text-black",
    },
    {
      id: 9,
      name: "AI Music Composer",
      description:
        "Generate personalized music tracks based on user preferences, mood, or specified themes using generative AI algorithms.",
      gradient: "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200",
      color: "text-pink-600",
    },
    {
      id: 10,
      name: "AI Fashion Adviser",
      description:
        "Users can upload images of clothing items, and the AI suggests outfit combinations, taking into account personal style preferences and current fashion trends.",
      gradient: "bg-gradient-to-r from-green-200 via-green-300 to-blue-500",
      color: "text-blue-800",
    },
    {
      id: 11,
      name: "AI Travel Planner",
      description:
        "Assist users in planning trips by analyzing preferences, suggesting destinations, creating itineraries, and providing travel tips.",
      gradient: "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700",
      color: "text-black",
    },
    {
      id: 12,
      name: "AI Product Review Analyzer",
      description:
        "Analyze product reviews from various sources and generate a summarized overview, highlighting common sentiments and key insights.",
      gradient: "bg-gradient-to-r from-green-200 via-green-400 to-purple-700",
      color: "text-white",
    },
  ],
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    getItems: (state) => {
      return state.itemList;
    },
  },
});

export const { getItems } = itemSlice.actions;
export default itemSlice.reducer;
