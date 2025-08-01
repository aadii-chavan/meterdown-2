import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, MapPin, Clock } from 'lucide-react-native';

export default function EnterLocationScreen() {
  const [pickupLocation, setPickupLocation] = useState('Connaught Place, New Delhi');
  const [dropLocation, setDropLocation] = useState('');

  const handleBack = () => {
    router.back();
  };

  const handleMapView = () => {
    // Navigate to map view or show map modal
    console.log('Show map view');
  };

  const recentLocations = [
    'India Gate, New Delhi',
    'Red Fort, New Delhi',
    'Lotus Temple, New Delhi',
    'Qutub Minar, New Delhi',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        {/* Location Inputs */}
        <View style={styles.locationInputsContainer}>
          {/* Pickup Location */}
          <View style={styles.inputField}>
            <Text style={styles.inputLabel}>Starting from?</Text>
            <View style={styles.inputRow}>
              <View style={styles.locationDot}>
                <View style={styles.pickupDot} />
              </View>
              <TextInput
                style={styles.locationInput}
                value={pickupLocation}
                onChangeText={setPickupLocation}
                placeholder="Starting from?"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          {/* Drop Location */}
          <View style={styles.inputField}>
            <Text style={styles.inputLabel}>Where are you going?</Text>
            <View style={styles.inputRow}>
              <View style={styles.locationDot}>
                <View style={styles.dropDot} />
              </View>
              <TextInput
                style={styles.locationInput}
                value={dropLocation}
                onChangeText={setDropLocation}
                placeholder="Where are you going?"
                placeholderTextColor="#999"
                autoFocus={true}
              />
            </View>
          </View>
        </View>

        {/* Centered Content */}
        <View style={styles.centeredContent}>
          {/* Illustration */}
          <View style={styles.illustrationContainer}>
            <View style={styles.phoneIllustration}>
              <View style={styles.phoneScreen}>
                <View style={styles.phoneContent}>
                  <Text style={styles.phoneText}>📱</Text>
                </View>
              </View>
            </View>
            <Text style={styles.illustrationTitle}>Start Typing</Text>
            <Text style={styles.illustrationSubtitle}>
              Search for a place to kick off your drive.
            </Text>
          </View>

          {/* Map Button */}
          <TouchableOpacity style={styles.mapButton} onPress={handleMapView}>
            <MapPin size={20} color="#f5cb5c" />
            <Text style={styles.mapButtonText}>Map</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Locations */}
        {dropLocation.length > 0 && (
          <View style={styles.suggestionsContainer}>
            <Text style={styles.suggestionsTitle}>Recent locations</Text>
            {recentLocations.map((location, index) => (
              <TouchableOpacity
                key={index}
                style={styles.suggestionItem}
                onPress={() => setDropLocation(location)}
              >
                <Clock size={16} color="#666" />
                <Text style={styles.suggestionText}>{location}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  locationInputsContainer: {
    marginTop: 20,
  },
  inputField: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#666',
    marginBottom: 8,
    marginLeft: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  locationDot: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  pickupDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#333',
  },
  dropDot: {
    width: 12,
    height: 12,
    borderRadius: 1,
    backgroundColor: '#f5cb5c',
  },
  locationInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  phoneIllustration: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f5cb5c',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  phoneScreen: {
    width: 60,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  phoneContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneText: {
    fontSize: 24,
  },
  illustrationTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginBottom: 8,
  },
  illustrationSubtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  mapButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#f5cb5c',
    marginLeft: 8,
  },
  suggestionsContainer: {
    marginBottom: 30,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginBottom: 15,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  suggestionText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#000',
    marginLeft: 12,
  },
});