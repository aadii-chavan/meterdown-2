import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { MapPin, Clock, Star, LogOut } from 'lucide-react-native';

export default function HomeScreen() {
  const handleLogout = () => {
    router.push('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back!</Text>
            <Text style={styles.subtitle}>Ready for your next ride?</Text>
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <LogOut size={24} color="#242423" />
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionCard}>
              <MapPin size={32} color="#f5cb5c" />
              <Text style={styles.actionText}>Book Ride</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Clock size={32} color="#f5cb5c" />
              <Text style={styles.actionText}>Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Star size={32} color="#f5cb5c" />
              <Text style={styles.actionText}>Favorites</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Rides */}
        <View style={styles.recentRides}>
          <Text style={styles.sectionTitle}>Recent Rides</Text>
          <View style={styles.rideCard}>
            <View style={styles.rideInfo}>
              <Text style={styles.rideLocation}>Connaught Place → IGI Airport</Text>
              <Text style={styles.rideTime}>Yesterday, 2:30 PM</Text>
              <Text style={styles.ridePrice}>₹450</Text>
            </View>
            <View style={styles.rideRating}>
              <Star size={16} color="#f5cb5c" />
              <Text style={styles.ratingText}>4.8</Text>
            </View>
          </View>
          
          <View style={styles.rideCard}>
            <View style={styles.rideInfo}>
              <Text style={styles.rideLocation}>Karol Bagh → Khan Market</Text>
              <Text style={styles.rideTime}>Jan 15, 10:15 AM</Text>
              <Text style={styles.ridePrice}>₹180</Text>
            </View>
            <View style={styles.rideRating}>
              <Star size={16} color="#f5cb5c" />
              <Text style={styles.ratingText}>4.9</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eddf',
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333533',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  logoutButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#e8eddf',
  },
  quickActions: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333533',
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333533',
    marginTop: 8,
  },
  recentRides: {
    padding: 20,
    paddingTop: 0,
  },
  rideCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rideInfo: {
    flex: 1,
  },
  rideLocation: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333533',
  },
  rideTime: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  ridePrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f5cb5c',
    marginTop: 4,
  },
  rideRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333533',
    marginLeft: 4,
  },
});