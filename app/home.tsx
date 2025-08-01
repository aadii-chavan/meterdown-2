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
        <TouchableOpacity style={styles.searchContainer} onPress={handleWhereToGo}>
          <View style={styles.searchBox}>
            <View style={styles.searchIcon}>
              <MapPin size={20} color="#666" />
            </View>
            <Text style={styles.searchText}>Where to?</Text>
            <View style={styles.laterButton}>
              <Text style={styles.laterText}>Later</Text>
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
  searchContainer: {
    marginBottom: 20,
  },
  searchBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchText: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  laterButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  laterText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
    flexDirection: 'row',
    alignItems: 'center',
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