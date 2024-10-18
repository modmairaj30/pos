package com.webapp.apis.masters.services.impl;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;
import java.util.Date;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.webapp.apis.domian.User;
import com.webapp.apis.masters.mapper.UserMapper;
import com.webapp.apis.masters.model.MessageResponse;
import com.webapp.apis.masters.model.UserMasterFormBean;
import com.webapp.apis.masters.repository.UserMasterRepository;
import com.webapp.apis.masters.service.UserMasterService;
import com.webapp.apis.utility.SessionUtility;

@Service
public class UserMasterServiceImpl implements UserMasterService {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserMasterServiceImpl.class);

	@Inject
	private UserMasterRepository userMasterRepository;

	@Inject
	private SessionUtility sessionUtility;

	@Autowired
	PasswordEncoder encoder;

	@Override
	public UserMasterFormBean getUser(Integer userId) {

		Optional<User> userMaster = userMasterRepository.findById(userId);
		UserMasterFormBean userMasterFormBean = new UserMasterFormBean();
		userMasterFormBean = UserMapper.mapDomainToForm(userMaster.get());
		if (userMaster.get().getPicByte() != null) {
			userMasterFormBean.setPicByte(decompressBytes(userMaster.get().getPicByte()));
		}
		return userMasterFormBean;
	}

	@Override
	public List<UserMasterFormBean> getAllUser() {

		List<User> listuserhMaster = userMasterRepository.findAllByOrderByIdDesc();
		List<UserMasterFormBean> listuserFormBean = new ArrayList<UserMasterFormBean>();
		listuserFormBean = UserMapper.mapDomainListToFormList(listuserhMaster);
		for(UserMasterFormBean userMasterFormBean:listuserFormBean)
		if (userMasterFormBean.getPicByte() != null) {
			userMasterFormBean.setPicByte(decompressBytes(userMasterFormBean.getPicByte()));
		}
		return listuserFormBean;
	}

	@Transactional
	@Override
	public ResponseEntity<?> saveUserMasterWithFile(MultipartFile file, UserMasterFormBean userMasterFormBean) {
		User userMaster = new User();
		if (userMasterRepository.existsByUsername(userMasterFormBean.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}
		if (userMasterRepository.existsByEmail(userMasterFormBean.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
		}

		userMaster = UserMapper.mapFormToDomain(userMasterFormBean);
		try {
			userMaster.setPicByte(compressBytes(file.getBytes()));
			userMaster.setPassword(encoder.encode(userMaster.getPassword()));
		} catch (IOException e) {
			e.printStackTrace();
		}
		userMaster = userMasterRepository.save(userMaster);

		return ResponseEntity.ok().body(new MessageResponse("ok"));
	}

	// compress the image bytes before storing it in the database

	public static byte[] compressBytes(byte[] data) {

		Deflater deflater = new Deflater();

		deflater.setInput(data);

		deflater.finish();

		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);

		byte[] buffer = new byte[1024];

		while (!deflater.finished()) {

			int count = deflater.deflate(buffer);

			outputStream.write(buffer, 0, count);

		}

		try {

			outputStream.close();

		} catch (IOException e) {

		}

		// System.out.println("Compressed Image Byte Size - " +
		// outputStream.toByteArray().length);

		return outputStream.toByteArray();

	}

	// uncompress the image bytes before returning it to the angular application

	public static byte[] decompressBytes(byte[] data) {

		Inflater inflater = new Inflater();
		inflater.setInput(data);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer = new byte[1024];
		try {
			while (!inflater.finished()) {
				int count = inflater.inflate(buffer);
				outputStream.write(buffer, 0, count);
			}
			outputStream.close();
		} catch (IOException ioe) {

		} catch (DataFormatException e) {

		}
		return outputStream.toByteArray();
	}

	@Override
	public ResponseEntity<?> saveUserMaster(UserMasterFormBean userMasterFormBean) {
		if (userMasterRepository.existsByUsername(userMasterFormBean.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}
		User userMaster = new User();
		userMaster = UserMapper.mapFormToDomainWithOutPic(userMasterFormBean);
		userMaster.setPassword(encoder.encode(userMaster.getPassword()));
		userMaster = userMasterRepository.save(userMaster);
		return ResponseEntity.ok().body(new MessageResponse("ok"));

	}

	@Override
	public ResponseEntity<?> updateUserMaster(UserMasterFormBean userMasterFormBean) {
		User userMaster = new User();
		userMaster = userMasterRepository.findById(Integer.valueOf(userMasterFormBean.getId())).get();

		if (!userMaster.getPassword().equals(userMasterFormBean.getPassword())) {
			userMasterFormBean.setPassword(encoder.encode(userMasterFormBean.getPassword()));
		}
		userMasterFormBean.setPicByte(userMaster.getPicByte());
		userMaster = UserMapper.mapFormToDomainWithOutPic(userMasterFormBean);
		userMaster = userMasterRepository.save(userMaster);

		return ResponseEntity.ok().body(new MessageResponse("ok"));

	}

	@Override
	public ResponseEntity<?> updateUserMasterWithFile(MultipartFile file, UserMasterFormBean userMasterFormBean) {
		User userMaster = new User();
		userMaster = UserMapper.mapFormToDomain(userMasterFormBean);
		try {
			userMaster = userMasterRepository.findById(Integer.valueOf(userMasterFormBean.getId())).get();

			if (!userMaster.getPassword().equals(userMasterFormBean.getPassword())) {
				userMasterFormBean.setPassword(encoder.encode(userMasterFormBean.getPassword()));
			}
			// userMasterFormBean.setPicByte(userMaster.getPicByte());
			userMaster = UserMapper.mapFormToDomain(userMasterFormBean);
			userMaster.setPicByte(compressBytes(file.getBytes()));
			userMaster = userMasterRepository.save(userMaster);

			return ResponseEntity.ok().body(new MessageResponse("ok"));
		} catch (IOException e) {
			e.printStackTrace();
		}

		return ResponseEntity.ok().body(new MessageResponse("ok"));
	}

}
