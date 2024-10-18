package com.webapp.apis.masters.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webapp.apis.domian.User;

@Repository
public interface UserMasterRepository extends JpaRepository<User, Integer> {
	public List<User> findAllByOrderByIdDesc();

	public Optional<User> findById(Integer userid);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
}
