import { Research } from '@/lib/schemas';

export const researchAreas: Research[] = [
  {
    title: 'Machine Learning for Satellite Data',
    desc: 'Investigating advanced CNN architectures for processing multi-spectral satellite imagery to detect environmental changes.',
    icon: '🛰️'
  },
  {
    title: 'Remote Sensing & Geospatial Intelligence',
    desc: 'Developing algorithms to analyze geospatial data for urban planning, agriculture, and disaster management.',
    icon: '🌍'
  },
  {
    title: 'AI for Environmental Monitoring',
    desc: 'Building models to track deforestation, water quality, and air pollution using earth observation data.',
    icon: '🤖'
  },
  {
    title: 'Computer Vision for Earth Observation',
    desc: 'Applying state-of-the-art object detection and segmentation techniques to high-resolution aerial imagery.',
    icon: '📡'
  },
  {
    title: 'Current Research Focus',
    desc: 'Currently working on a project at IIT Madras to improve the accuracy of crop yield prediction using time-series satellite data and deep learning models.',
    icon: '🎯',
    current: true,
    methodologies: [
      'Time-series analysis using LSTM/GRU networks',
      'Data fusion of optical and radar (SAR) imagery',
      'Transfer learning from pre-trained models on ImageNet'
    ]
  }
];
