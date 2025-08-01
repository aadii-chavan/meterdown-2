import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { router } from 'expo-router';
import { MapPin, Plus, Shield } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const handleWhereToGo = () => {
    router.push('/enter-location');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Map Background */}
      <View style={styles.mapContainer}>
        {/* Map Placeholder */}
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>Map View</Text>
          <Text style={styles.mapSubtext}>Interactive map will be integrated here</Text>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Where to go button */}
        <TouchableOpacity style={styles.whereToGoButton} onPress={handleWhereToGo}>
          <View style={styles.whereToGoContent}>
            <Text style={styles.whereToGoText}>Where would you like to go?</Text>
            <View style={styles.arrowIcon}>
              <Text style={styles.arrowText}>→</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickActionButton}>
            <View style={styles.buttonContent}>
              <Plus size={20} color="#f5cb5c" />
              <Text style={styles.quickActionText}>Add Home</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.quickActionButton}>
            <View style={styles.buttonContent}>
              <Plus size={20} color="#f5cb5c" />
              <Text style={styles.quickActionText}>Add Work</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Safety Card */}
        <View style={styles.safetyCard}>
          <View style={styles.safetyContent}>
            <Text style={styles.safetyTitle}>Setup{'\n'}Safety Now!</Text>
            <Text style={styles.safetySubtitle}>Safe and{'\n'}Reliable Rides</Text>
          </View>
          <View style={styles.safetyIcon}>
            <Shield size={40} color="#fff" />
          </View>
        </View>

        {/* Bottom Text */}
        <Text style={styles.bottomText}>Book and move, anywhere</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  mapText: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#666',
    marginBottom: 8,
  },
  mapSubtext: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#999',
    textAlign: 'center',
  },
  bottomSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  whereToGoButton: {
    backgroundColor: '#000',
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  whereToGoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  whereToGoText: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#f5cb5c',
  },
  arrowIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 18,
    color: '#f5cb5c',
    fontWeight: 'bold',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickActionButton: {
    backgroundColor: '#000',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActionText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#f5cb5c',
    marginLeft: 8,
  },
  safetyCard: {
    backgroundColor: '#f5cb5c',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  safetyContent: {
    flex: 1,
  },
  safetyTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    lineHeight: 28,
  },
  safetySubtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#000',
    marginTop: 4,
    lineHeight: 20,
  },
  safetyIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#333533',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#999',
    textAlign: 'center',
  },
});