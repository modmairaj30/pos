package com.webapp.apis.reports.utility;

import org.springframework.stereotype.Service;

@Service
public class FindingOSUtil {
private static String OS = System.getProperty("os.name").toLowerCase();
	
	public static String findOs() {
		String os = null;
		if (isWindows()) {
			os = "windows";
		} else if (isMac()) {
			os = "mac";
		} else if (isUnix()) {
			os = "linux";
		} else if (isSolaris()) {
			os = "solaris";
		} else {
			os = "not supported";
		}
		return os;
	}

	public static boolean isWindows() {

		return (OS.indexOf("win") >= 0);

	}

	public static boolean isMac() {

		return (OS.indexOf("mac") >= 0);

	}

	public static boolean isUnix() {

		return (OS.indexOf("nix") >= 0 || OS.indexOf("nux") >= 0 || OS.indexOf("aix") > 0 );
		
	}

	public static boolean isSolaris() {

		return (OS.indexOf("sunos") >= 0);

	}
}
