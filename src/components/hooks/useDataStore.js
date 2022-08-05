import create from 'zustand';
import { getSightings } from '../../apiCalls';

const useDataStore = create((set) => ({
  sightings: [], 
  topContributors: [], 
  checklist: [], 
  setSightings: (data) => {set({sightings: data})}, 
  
}))