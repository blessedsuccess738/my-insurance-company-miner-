import { Heading, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeMiners: 0,
    dailyRevenue: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await axios.get('/api/admin/stats');
        setStats(data);
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    };
    fetchStats();
  }, []);

  return (
    <>
      <Heading mb={6}>Admin Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        <StatCard label="Total Users" value={stats.totalUsers} />
        <StatCard label="Active Miners" value={stats.activeMiners} />
        <StatCard label="Daily Revenue (₦)" value={stats.dailyRevenue.toLocaleString()} />
      </SimpleGrid>
    </>
  );
};

const StatCard = ({ label, value }) => (
  <Stat p={4} bg="white" borderRadius="md" boxShadow="sm">
    <StatLabel fontWeight="medium">{label}</StatLabel>
    <StatNumber fontSize="2xl">{value}</StatNumber>
  </Stat>
);

export default Dashboard;
